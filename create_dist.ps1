Write-Host "📦 Creating Distribution Package..." -ForegroundColor Cyan

$sourceDir = Get-Location
$distDir = "$sourceDir\dist_temp"
$zipName = "Consultancy-Template-v1.0.zip"

# 1. Clean previous runs
if (Test-Path $distDir) { Remove-Item -Recurse -Force $distDir }
if (Test-Path $zipName) { Remove-Item -Force $zipName }

# 2. Create Temp Directory
New-Item -ItemType Directory -Force -Path $distDir | Out-Null

# 3. Copy Files (Excluding heavy/hidden folders)
$exclude = @('.git', '.next', 'node_modules', '.env', '.env.local', 'dist_temp', '*.zip', 'build_error.log')

Get-ChildItem -Path $sourceDir | Where-Object { 
    $exclude -notcontains $_.Name 
} | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $distDir -Recurse
}

Write-Host "✅ Files copied to clean directory." -ForegroundColor Green

# 4. Zip It
Write-Host "⏳ Zipping files... (This may take a moment)" -ForegroundColor Yellow
Compress-Archive -Path "$distDir\*" -DestinationPath $zipName

# 5. Cleanup Temp
Remove-Item -Recurse -Force $distDir

Write-Host "🎉 Success! Created: $zipName" -ForegroundColor Green
Write-Host "You can upload this file to your marketplace." -ForegroundColor Gray

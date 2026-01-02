Write-Host "Creating Distribution Package..."

$zipName = "Consultancy-Template-v1.0.zip"
$source = Get-Location
$dest = "$source\dist_temp"

if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
if (Test-Path $zipName) { Remove-Item -Force $zipName }

New-Item -ItemType Directory -Force -Path $dest | Out-Null

$exclude = @('.git', '.next', 'node_modules', '.env', '.env.local', 'dist_temp', '*.zip', 'build_error.log', 'create_dist.ps1')

Get-ChildItem -Path $source | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $dest -Recurse
}

Compress-Archive -Path "$dest\*" -DestinationPath $zipName

Remove-Item -Recurse -Force $dest

Write-Host "Success! Created: $zipName"
Write-Host "Press Enter to exit..."
Read-Host

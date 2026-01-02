import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from './env'

// Check if Sanity is configured
export const isSanityEnabled = !!projectId && projectId !== 'your-project-id';

export const client = createClient({
    projectId: projectId || 'dummy-project-id', // Prevent crash if missing
    dataset: dataset || 'production',
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: "sk2NLCmI4AAeMM3r6s0GFhxckkyFicj9QyTjgcH3NalggVOEeKHwqrd0DSFCFcbUZ1YetKtflexI30wFUqIgnDpS7OD8zA4CfcXz17qiLNKGZjt8bXA1ryXiogWl1HHsXPf5ssBE1GgmXFMgu2PnFA77mua8JriWWTdmKQPKRLNL6ehY07AE",
})
export default client
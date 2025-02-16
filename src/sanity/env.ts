export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skuUjyiEK4Y1wpb9a6S5JaUQdHWz276Q42dcloQBpAAxCuur6NTHeP7oRdpJnk20kebD6nj1isXTRr00dcXjET5buO0BIYfxeLcW3cRUeq6klKsdEBOF89CzdIW0gvtqdf6ikKNnPqnnKiNUKnANDhgK5tKY03cZnQrgJAUIs8eanMxPc9sF",
  'Missing environment variable: SANITY_API_TOKEN'
)



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

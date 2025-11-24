export const useApi = () => {
  const config = useRuntimeConfig()
  const token = useCookie('token')

  const apiFetch = async <T = any>(
    endpoint: string, 
    options: any = {}
  ): Promise<T> => {
    const headers = {
      'Content-Type': 'application/json',
      ...(token.value && { Authorization: `Bearer ${token.value}` }),
      ...options.headers
    }

    return await $fetch<T>(`${config.public.apiBase}${endpoint}`, {
      ...options,
      headers
    })
  }

  return { apiFetch }
}

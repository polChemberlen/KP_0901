export const useAuth = () => {
  const token = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 7 // 7 дней
  })
  
  const user = useState<any>('user', () => null)
  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response: any = await $fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        body: credentials
      })
      
      token.value = response.token
      await checkAuth()
      
      return { success: true }
    } catch (error: any) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Неверный email или пароль' 
      }
    }
  }

  const register = async (userData: { 
    name: string
    email: string
    phone: string
    password: string 
  }) => {
    try {
      const response: any = await $fetch('http://localhost:5000/api/users/registration', {
        method: 'POST',
        body: userData
      })
      
      token.value = response.token
      await checkAuth()
      
      return { success: true }
    } catch (error: any) {
      console.error('Registration error:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка регистрации' 
      }
    }
  }

  const checkAuth = async () => {
    if (!token.value) {
      user.value = null
      return false
    }

    try {
      const response: any = await $fetch('http://localhost:5000/api/users/auth', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })
      
      user.value = response.user
      token.value = response.token
      
      return true
    } catch (error) {
      console.error('Auth check error:', error)
      token.value = null
      user.value = null
      return false
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    navigateTo('/')
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    register,
    checkAuth,
    logout
  }
}

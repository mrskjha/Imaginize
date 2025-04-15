'use server'


import { prisma } from '@/lib/prismaClient'
import type { User } from '@prisma/client'


// Common result type
type ApiResponse<T> = {
  _id?: string
  success: boolean
  message?: string
  user?: T
  users?: T[]
}

export type CreateUserParams = {
  clerkId: string
  email: string
  username: string
  firstName: string
  lastName: string
  photo: string
}

// --------------------
// Create User
// --------------------
export default async function createUser(user: CreateUserParams){
  const data  = {
    clerkId: 'clerkId',
    email: 'email',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    photo: 'photo',
  }

  const newUser =await prisma.user.create({
    data: {
      clerkId: data.clerkId,
      email: data.email,
      username: data.username,
      photo: data.photo,
    },
  })
  if (!newUser) {
    return new Response('User not created', {
      status: 500,
    })
  }
  return new Response(JSON.stringify(newUser), {
    status: 200,
  })

}

// --------------------
// Get All Users
// --------------------
export async function getUsers(): Promise<ApiResponse<User>> {
  try {
    const users = await prisma.user.findMany()
    if (!users || users.length === 0) {
      return {
        success: false,
        message: 'No users found',
        users: [],
      }
    }
    return {
      success: true,
      message: 'Users retrieved successfully',
      users,
    }
  } catch (error) {
    console.error('error', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    }
  }
}

// --------------------
// Get User By Clerk ID
// --------------------
export async function getUserById(id: string): Promise<ApiResponse<User>> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
    })

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      }
    }

    return {
      success: true,
      message: 'User found',
      user,
    }
  } catch (error) {
    console.error('error', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    }
  }
}

// --------------------
// Delete User
// --------------------
export async function deleteUser(id: string): Promise<ApiResponse<User>> {
  try {
    const user = await prisma.user.delete({
      where: {
        clerkId: id,
      },
    })

    return {
      success: true,
      message: 'User deleted successfully',
      user,
    }
  } catch (error) {
    console.error('error', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
    }
  }
}

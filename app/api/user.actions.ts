'use server'

import { CreateUserParams, CreateUserSchema } from '../../type'
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

// --------------------
// Create User
// --------------------
export default async function createUser(user: CreateUserParams): Promise<ApiResponse<User>> {
  try {
    const validated = CreateUserSchema.parse(user)

    const newUser = await prisma.user.create({
      data: {
        clerkId: validated.clerkId,
        email: validated.email,
        username: validated.username,
        firstName: validated.firstName,
        lastName: validated.lastName ?? null,
        photo: validated.photo ?? null,
      },
    })

    return {
      success: true,
      message: 'User created successfully',
      user: newUser,
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
// Get All Users
// --------------------
export async function getUsers(): Promise<ApiResponse<User>> {
  try {
    const users = await prisma.user.findMany()
    return {
      success: true,
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

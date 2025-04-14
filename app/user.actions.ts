'use server'

import { CreateUserParams, CreateUserSchema } from '../type'
import prisma from '@/lib/prisma'



export default async function createUser(user: CreateUserParams) {
  try {
    
    const validated = CreateUserSchema.parse(user)

    const newUser = await prisma.user.create({
      data: validated,
    })

    return {
      success: true,
      message: 'User created successfully',
      user: newUser,
    }
    
  }  catch (error: any) {
    console.error('error', error)
    return {
      success: false,
      message: error?.message || 'Something went wrong',
    }
  }
}

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return {
      success: true,
      users,
    }
  } catch (error: any) {
    console.error('error', error)
    return {
      success: false,
      message: error?.message || 'Something went wrong',
    }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
    })
    return {
      success: true,
      user,
    }
  } catch (error: any) {
    console.error('error', error)
    return {
      success: false,
      message: error?.message || 'Something went wrong',
    }
  }
}


export async function deleteUser(id: string) {
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
  } catch (error: any) {
    console.error('error', error)
    return {
      success: false,
      message: error?.message || 'Something went wrong',
    }
  }
}


// export async function updateUser(id: string, user: CreateUserParams) {
//   try {
//     const validated = CreateUserSchema.parse(user)

//     const updatedUser = await prisma.user.update({
//       where: {
//         id,
//       },
//       data: validated,
//     })
//     return {
//       success: true,
//       message: 'User updated successfully',
//       user: updatedUser,
//     }
//   } catch (error: any) {
//     console.error('error', error)
//     return {
//       success: false,
//       message: error?.message || 'Something went wrong',
//     }
//   }
// }


'use client'

import { Bone } from 'lucide-react'

export function Loading() {
  return (
    <div className="w-full flex justify-center">
      <Bone className="w-5 h-5 animate-spin text-zinc-100" />
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { searchBios } from '@/lib/bioutil'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q') || ''
  const pageParam = req.nextUrl.searchParams.get('page') || '1'
  const limitParam = req.nextUrl.searchParams.get('limit') || '18'

  const page = parseInt(pageParam, 10)
  const limit = parseInt(limitParam, 10)

  const { bios, pagination } = await searchBios(query, page, limit)

  return NextResponse.json({ bios, pagination })
}

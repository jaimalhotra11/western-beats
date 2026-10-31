import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import ReleasePage from './ReleasePage'

export const metadata = {
  title: 'Release EP / Album — Western Beats',
  description: 'Submit your EP or full album for distribution on 150+ platforms worldwide. Free, fast, 80% royalty share.',
}

export default async function Page() {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/sign-up?next=/release')
  return <ReleasePage />
}

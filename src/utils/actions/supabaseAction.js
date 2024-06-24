'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function postConsult(formData) {
	const supabase = createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const body = {
		name: formData.get('name'),
		phone: formData.get('phone'),
		carName: formData.get('carName')
	}

	const { data, error } = await supabase.from('consult').insert(body).select('id')

	if (error) {
		console.error('error', error)
		// redirect('/error')
	}
	redirect('/')
}

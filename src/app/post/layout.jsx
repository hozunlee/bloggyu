import ConsultForm from '@/lib/components/ConsultForm'

export default function postLayout({ children }) {
	return (
		<>
			<div>{children}</div>
			<div>
				<ConsultForm />
			</div>
		</>
	)
}

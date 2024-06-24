import { postConsult } from '@/utils/actions/supabaseAction.js'

export default function ConsultForm() {
	return (
		<>
			<h3>당신의 장기렌트 전문가 규팀장에게 견적받기</h3>
			<form>
				<div>
					<label for="name">이름</label>
					<input
						id="name"
						name="name"
						type="text"
						pattern="^[가-힣]{2,4}$"
						title="이름은 한글 2자 이상 5자 미만이어야 합니다."
						required
					/>
				</div>
				<div>
					<label for="phone">연락처</label>
					<input
						id="phone"
						name="phone"
						type="text"
						pattern="^\d{11}$"
						title="연락처는 11자리 숫자여야 합니다."
						required
					/>
				</div>
				<label htmlFor="carName">선호차량 명</label>
				<input id="carName" name="carName" type="text" />
				<button formAction={postConsult}>견적 받기</button>
			</form>
		</>
	)
}

import {
  SignUpFormData,
  SignUpStepType,
} from '@/features/auth/types/SignUpType.ts'

interface SignUpStep3Props {
  changeViewStep: (viewStep: SignUpStepType) => void
  submitFormData: SignUpFormData
  setSubmitFormData: (submitFormData: SignUpFormData) => void
}

export default function SignUpStep3({
  changeViewStep,
  submitFormData,
  setSubmitFormData,
}: SignUpStep3Props) {
  console.log(submitFormData.email)
  return (
    <>
      <p>스탭3</p>
      <button
        type="button"
        onClick={() => changeViewStep(SignUpStepType.step4)}
      >
        test{' '}
      </button>
    </>
  )
}

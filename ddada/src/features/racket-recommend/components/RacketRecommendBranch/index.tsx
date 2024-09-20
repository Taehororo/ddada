import MainStep from '@/features/racket-recommend/components/RacketRecommendBranch/RecommendStep/MainStep.tsx'
import Step1 from '@/features/racket-recommend/components/RacketRecommendBranch/RecommendStep/Step1.tsx'
import {
  ProgressStepType,
  RacketRecommendBranchProps,
} from '@/features/racket-recommend/types/RacketRecommendType.ts'

export default function RacketRecommendBranch({
  progressStep,
  changeProgress,
}: RacketRecommendBranchProps) {
  switch (progressStep) {
    case ProgressStepType.main:
      return <MainStep changeProgress={changeProgress} />
    // case ProgressStepType.step2:
    //   return <Step1 changeProgress={changeProgress} />
    // case ProgressStepType.step3:
    //   return <Step2 changeProgress={changeProgress} />
    // case ProgressStepType.step4:
    //   return <Step3 />

    default:
      return <div>잘못된 접근입니다.</div>
  }
}

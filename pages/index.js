// pages/index.js
import { useState } from 'react';
import StageOne from '../components/stages/stageOne';
import StageTwo from '../components/stages/stageTwo';
import StageThree from '../components/stages/stageThree';
import SubmitPage from '../components/stages/submit';

export default function Home() {
    const [stage, setStage] = useState(1);

    const nextStage = () => setStage(stage + 1);
    const prevStage = () => setStage(stage - 1);
    const restartForm = () => setStage(1);

    return (
        <div>
            {stage === 1 && <StageOne nextStage={nextStage} />}
            {stage === 2 && <StageTwo nextStage={nextStage} prevStage={prevStage} />}
            {stage === 3 && <StageThree nextStage={nextStage} prevStage={prevStage} />}
            {stage === 4 && <SubmitPage restartForm={restartForm} />}
        </div>
    );
}

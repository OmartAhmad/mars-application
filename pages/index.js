// pages/index.js
import { useState } from 'react';
import StageOne from '../js/stages/stageOne';
import StageTwo from '../js/stages/stageTwo';
import StageThree from '../js/stages/stageThree';
import SubmitPage from '../js/stages/submit';

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

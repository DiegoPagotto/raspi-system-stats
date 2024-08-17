import { memory } from '@/app/types/memory';
import {
    bytesToGigaBytes,
    calculateUsedPercentage,
} from '@/app/utils/calculation-utils';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/progress-bar';

interface MemoryComponentProps {
    memoryInfo: memory;
}

const MemoryComponent = ({ memoryInfo }: MemoryComponentProps) => {
    const [ramUsage, setRamUsage] = useState<number>(
        calculateUsedPercentage(memoryInfo.used, memoryInfo.total)
    );

    return (
        <div>
            <div className="ram-usage mt-3">
                <p>
                    <b>Tipo</b>: {memoryInfo.type}
                </p>
                <p>
                    <b>Voltagem</b>: {memoryInfo.voltageConfigured} V
                </p>
                <p>
                    <b>Módulos</b>: {memoryInfo.memoryModules}
                </p>
                <ProgressBar usedPercentage={ramUsage} />
                <p className="text-right mt-1">
                    {bytesToGigaBytes(memoryInfo.used)} GB /{' '}
                    {bytesToGigaBytes(memoryInfo.total)} GB
                </p>
            </div>
        </div>
    );
};

export default MemoryComponent;

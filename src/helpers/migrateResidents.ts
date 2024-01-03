import { toString } from "express-validator/src/utils";

export const migrateCycle = (regs: any) => {
    let rank;
    let upgrade;

    const newPerCycle: any = Object.keys(regs).filter(reg => {
        return regs[reg]['grado_residente'] != regs[reg]['ced_residentes']['ced_especialidades']['grado_maximo']
    }).map(key => {
        rank = regs[key]['grado_residente'].split('R');
        rank = parseInt(rank[1]);
        rank = rank + 1;
        rank = 'R' + toString(rank);
        regs[key]['grado_residente'] = rank;
        upgrade = regs[key]
        return upgrade
    });

    return newPerCycle;
}
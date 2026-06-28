export interface SimParams {
  dt: number;      // Transition lag (\Delta t), ranges from 1.0 (tau) up to 20.0
  tau: number;     // Operational floor (\tau), fixed or adjustable, typically 1.0
  L: number;       // Path scale (L)
  v: number;       // Propagation limit (v), or speed of light c
  particlesCount: number; // number of lattice nodes/agents
}

export interface SimState {
  gamma: number;        // Saturation ratio \gamma = \tau / \Delta t
  routingCount: number; // 6, 3, or 1 based on shedding sequence
  turnBudget: number;   // Available budget
  activeAxes: string[]; // List of active axes: e.g. ["X+", "X-", "Y+", "Y-", "Z+", "Z-"]
  interactionsCount: number; // total count of Z6 interactions
  fps: number;
}

export interface Gate {
  id: string;
  type: 'H' | 'CNOT' | 'X' | 'Y' | 'Z' | 'PHASE';
  targetQubit: number;
  controlQubit?: number; // only for CNOT
}

export interface QECMetrics {
  steanePseudoThreshold: number; // 0.08108
  distance7MaxImprovement: number; // 2.86e7
  phaseBitRetention: number; // 99.54%
  overallSecurityScore: number; // percentage
}

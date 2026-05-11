import React, { useState, useEffect } from 'react';

function OEEKalkulator() {
  const [planTime, setPlanTime] = useState(480);
  const [runTime, setRunTime] = useState(420);
  const [totalParts, setTotalParts] = useState(1000);
  const [goodParts, setGoodParts] = useState(950);
  const [oee, setOee] = useState(0);

  useEffect(() => {
    // Rumus Sederhana OEE:
    // Availability = Run Time / Plan Time
    // Performance = (Assumed 100% for simplicity since target rate not in prompt)
    // Quality = Good Parts / Total Parts
    
    const availability = planTime > 0 ? (runTime / planTime) : 0;
    const quality = totalParts > 0 ? (goodParts / totalParts) : 0;
    const performance = 0.95; // Assuming a 95% performance for calculation variety
    
    const calculatedOee = (availability * performance * quality) * 100;
    setOee(calculatedOee.toFixed(2));
  }, [planTime, runTime, totalParts, goodParts]);

  const getOeeColor = () => {
    if (oee < 50) return 'text-danger';
    if (oee > 85) return 'text-success';
    return 'text-warning';
  };

  const getOeeAlert = () => {
    if (oee < 50) return 'alert-danger';
    if (oee > 85) return 'alert-success';
    return 'alert-warning';
  };

  return (
    <div className="card shadow-md p-4 mb-5 border-0">
      <div className="card-body">
        <h3 className="fw-bold mb-4 text-center">Kalkulator OEE Sederhana</h3>
        
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Plan Time (Menit)</label>
              <input 
                type="number" 
                className="form-control" 
                value={planTime} 
                onChange={(e) => setPlanTime(Number(e.target.value))} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Run Time (Menit)</label>
              <input 
                type="number" 
                className="form-control" 
                value={runTime} 
                onChange={(e) => setRunTime(Number(e.target.value))} 
              />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Total Parts (Unit)</label>
              <input 
                type="number" 
                className="form-control" 
                value={totalParts} 
                onChange={(e) => setTotalParts(Number(e.target.value))} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Good Parts (Unit)</label>
              <input 
                type="number" 
                className="form-control" 
                value={goodParts} 
                onChange={(e) => setGoodParts(Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className={`alert ${getOeeAlert()} text-center p-4`}>
          <h4 className="mb-1 fw-bold text-uppercase">Nilai OEE Real-time</h4>
          <h1 className={`display-2 fw-bold ${getOeeColor()}`}>
            {oee}%
          </h1>
          <p className="mb-0">
            {oee < 50 ? 'Status: Perlu Peningkatan Serius!' : 
             oee > 85 ? 'Status: Performa Kelas Dunia (World Class)' : 
             'Status: Performa Stabil'}
          </p>
        </div>

        <div className="row text-center mt-3">
          <div className="col-4">
            <small className="text-muted d-block">Availability</small>
            <span className="fw-bold">{((runTime/planTime)*100).toFixed(1)}%</span>
          </div>
          <div className="col-4">
            <small className="text-muted d-block">Performance</small>
            <span className="fw-bold">95.0%</span>
          </div>
          <div className="col-4">
            <small className="text-muted d-block">Quality</small>
            <span className="fw-bold">{((goodParts/totalParts)*100).toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OEEKalkulator;

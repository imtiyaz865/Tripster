import { useEffect, useState } from 'react';
import './TrainPreloader.css';

const STATIONS = ['Kacheguda', 'Shadnagar', 'Kurnool', 'Anantapur', 'Dharmavaram', 'Bengaluru'];

export default function TrainPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stationIdx, setStationIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 3200;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      setStationIdx(Math.min(STATIONS.length - 1, Math.floor((pct / 100) * STATIONS.length)));

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onComplete, 700);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div className={`train-preloader ${exiting ? 'train-preloader--exit' : ''}`} aria-live="polite">
      <div className="preloader-sky">
        <div className="preloader-cloud preloader-cloud--1" />
        <div className="preloader-cloud preloader-cloud--2" />
        <div className="preloader-cloud preloader-cloud--3" />
      </div>

      <div className="preloader-scenery">
        <div className="scenery-layer scenery-hills" />
        <div className="scenery-layer scenery-trees" />
        <div className="scenery-layer scenery-poles" />
      </div>

      <div className="preloader-track-wrap">
        <div className="preloader-track">
          <div className="track-sleepers" />
        </div>
      </div>

      <div
        className="preloader-train"
        style={{ left: `calc(${Math.min(progress, 92)}% - 3rem)` }}
      >
        <div className="train-smoke">
          <span /><span /><span />
        </div>
        <div className="train-body">
          <div className="train-cab">
            <div className="train-window" />
          </div>
          <div className="train-car">
            <div className="train-window" />
            <div className="train-window" />
          </div>
          <div className="train-car train-car--last">
            <div className="train-window" />
          </div>
        </div>
        <div className="train-wheels">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>

      <div className="preloader-content">
        <p className="preloader-tag">All aboard</p>
        <h2 className="preloader-title">Mission React Nexus</h2>
        <p className="preloader-route">
          Hyderabad <span className="preloader-arrow">→</span> Bengaluru
        </p>

        <div className="preloader-station">
          <span className="station-label">Next stop</span>
          <span className="station-name" key={stationIdx}>
            {STATIONS[stationIdx]}
          </span>
        </div>

        <div className="preloader-progress">
          <div className="progress-rail">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
            <div className="progress-dot" style={{ left: `${progress}%` }} />
          </div>
          <span className="progress-text">{Math.round(progress)}% journey loaded</span>
        </div>
      </div>
    </div>
  );
}

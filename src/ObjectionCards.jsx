import { useMemo } from 'react'

const OBJECTIONS = [
  { key: 'price', keyword: 'expensive' },
  { key: 'price', keyword: 'too costly' },
  { key: 'price', keyword: 'out of budget' },
  { key: 'price', keyword: 'cannot afford' },
  { key: 'price', keyword: 'pricey' },
  { key: 'price', keyword: 'overpriced' },
  { key: 'timing', keyword: 'later' },
  { key: 'timing', keyword: 'not right now' },
  { key: 'timing', keyword: 'too soon' },
  { key: 'timing', keyword: 'wait until next quarter' },
  { key: 'timing', keyword: 'maybe in the future' },
  { key: 'timing', keyword: 'not a good time' },
  { key: 'authority', keyword: 'need approval' },
  { key: 'authority', keyword: 'need manager approval' },
  { key: 'authority', keyword: 'have to run it by my team' },
  { key: 'authority', keyword: 'need to consult' },
  { key: 'authority', keyword: 'not my decision' },
  { key: 'competition', keyword: 'we already use someone else' },
  { key: 'competition', keyword: 'loyal to current provider' },
  { key: 'competition', keyword: 'switching is hard' },
  { key: 'trust', keyword: 'not sure about your company' },
  { key: 'trust', keyword: 'never heard of you' },
  { key: 'trust', keyword: 'not convinced' },
  { key: 'features', keyword: 'doesn’t have what we need' },
  { key: 'features', keyword: 'missing features' },
  { key: 'features', keyword: 'not enough functionality' },
  { key: 'urgency', keyword: 'no rush' },
  { key: 'urgency', keyword: 'we are fine for now' },
  { key: 'urgency', keyword: 'not a priority' },
  { key: 'fit', keyword: 'not a good fit' },
  { key: 'fit', keyword: 'doesn’t meet our needs' },
  { key: 'fit', keyword: 'not relevant to us' },
  { key: 'process', keyword: 'too complicated' },
  { key: 'process', keyword: 'too much work' },
  { key: 'process', keyword: 'hard to implement' },
  { key: 'budget', keyword: 'budget is frozen' },
  { key: 'budget', keyword: 'no budget for this' },
  { key: 'budget', keyword: 'budget cuts' },
  { key: 'priority', keyword: 'other projects first' },
  { key: 'priority', keyword: 'higher priorities' },
  { key: 'risk', keyword: 'too risky' },
  { key: 'risk', keyword: 'concerns about ROI' },
  { key: 'risk', keyword: 'uncertain outcomes' },
  { key: 'experience', keyword: 'had bad experience before' },
  { key: 'experience', keyword: 'didn’t work last time' },
  { key: 'knowledge', keyword: 'don’t know enough' },
  { key: 'knowledge', keyword: 'need more info' },
  { key: 'other', keyword: 'just thinking' },
  { key: 'other', keyword: 'maybe later' },
  { key: 'other', keyword: 'not interested' }
];

export default function ObjectionCards({ transcript, earlyWarning }) {
  const activeCards = useMemo(() => {
    if (!transcript) return []

    const lower = transcript.toLowerCase()

    return OBJECTIONS.filter(o => lower.includes(o.keyword))
  }, [transcript])

  return (
    <div className="cards">
      {earlyWarning && (
        <div className="warning">
          ⚠️ Possible objection forming…
        </div>
      )}

      {activeCards.map(card => (
        <div key={card.key} className="card">
          <h3>{card.key}</h3>
          <p>Detected from finalized speech</p>
        </div>
      ))}

      {activeCards.length === 0 && !earlyWarning && (
        <p>No objections detected</p>
      )}
    </div>
  )
}

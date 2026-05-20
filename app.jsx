// App shell — design canvas with 4 iOS frames presenting the FOMO Campus mobile app.

const PHONE_W = 380;
const PHONE_H = 800;

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: PHONE_W, height: PHONE_H,
      borderRadius: 44, overflow: 'hidden',
      position: 'relative', background: '#000',
      boxShadow: '0 30px 70px rgba(17,17,17,0.18), 0 0 0 1px rgba(0,0,0,0.08)',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 112, height: 32, borderRadius: 24, background: '#000', zIndex: 250,
      }} />
      <div style={{
        position: 'absolute', inset: 6, borderRadius: 38, overflow: 'hidden',
        background: FOMO_BG,
      }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="campus-overview"
        title="FOMO Campus — Mobile app"
        subtitle="Four key surfaces for the 50 000 m² Forus community. Editorial cream + flamingo pink + black; DM Serif Display + DM Sans. Persistent bottom nav across all screens."
      >
        <DCArtboard id="home" label="01 · Home Hub" width={PHONE_W} height={PHONE_H}>
          <PhoneFrame><HomeScreen /></PhoneFrame>
        </DCArtboard>

        <DCArtboard id="rooms" label="02 · Themed Rooms" width={PHONE_W} height={PHONE_H}>
          <PhoneFrame><RoomsScreen /></PhoneFrame>
        </DCArtboard>

        <DCArtboard id="soi21" label="03 · Soi21 Order" width={PHONE_W} height={PHONE_H}>
          <PhoneFrame><Soi21Screen /></PhoneFrame>
        </DCArtboard>

        <DCArtboard id="support" label="04 · Concierge" width={PHONE_W} height={PHONE_H}>
          <PhoneFrame><SupportScreen /></PhoneFrame>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

import { useState, useCallback } from 'react';
import Editor from './components/Editor/Editor';
import Shell from './components/Layout/Shell';
import Garden from './components/Garden/Garden';
import Landing from './components/Onboarding/Landing';
import FirstVisit from './components/Onboarding/FirstVisit';
import { FirstPreserveGuide, GardenTooltip, isFirstPreserve, isFirstGardenVisit } from './components/Onboarding/Guides';
import { Flower2 } from 'lucide-react';

function App() {
    const [typingVelocity, setTypingVelocity] = useState(0);
    const [showGarden, setShowGarden] = useState(false);
    const [showLanding, setShowLanding] = useState(true);
    const [showFirstVisit, setShowFirstVisit] = useState(false);
    const [showFirstPreserveGuide, setShowFirstPreserveGuide] = useState(false);
    const [showGardenTooltip, setShowGardenTooltip] = useState(false);
    const [isFirstGarden, setIsFirstGarden] = useState(isFirstGardenVisit());

    // Called when user preserves a thought
    const handlePreserve = useCallback(() => {
        if (isFirstPreserve()) {
            setShowFirstPreserveGuide(true);
        }
    }, []);

    // Go to garden from the first preserve guide
    const handleGoToGardenFromGuide = () => {
        setShowFirstPreserveGuide(false);
        setShowGarden(true);
    };

    // Dismiss the first preserve guide (show tooltip hint instead)
    const handleDismissPreserveGuide = () => {
        setShowFirstPreserveGuide(false);
        setShowGardenTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowGardenTooltip(false), 5000);
    };

    // When opening garden
    const handleOpenGarden = () => {
        setShowGardenTooltip(false);
        setIsFirstGarden(isFirstGardenVisit());
        setShowGarden(true);
    };

    // When closing garden
    const handleCloseGarden = () => {
        setShowGarden(false);
        setIsFirstGarden(false); // Don't show onboarding again
    };

    return (
        <>
            {showLanding ? (
                <Landing onEnter={() => {
                    setShowLanding(false);
                    setShowFirstVisit(true);
                }} />
            ) : showGarden ? (
                <Garden
                    onClose={handleCloseGarden}
                    showOnboarding={isFirstGarden}
                />
            ) : (
                <>
                    {showFirstVisit && <FirstVisit onDismiss={() => setShowFirstVisit(false)} />}
                    {showFirstPreserveGuide && (
                        <FirstPreserveGuide
                            onGoToGarden={handleGoToGardenFromGuide}
                            onDismiss={handleDismissPreserveGuide}
                        />
                    )}
                    <GardenTooltip visible={showGardenTooltip} />
                    <Shell typingVelocity={typingVelocity}>
                        <Editor
                            onVelocityChange={setTypingVelocity}
                            onPreserve={handlePreserve}
                        />
                        <button
                            onClick={handleOpenGarden}
                            className="btn-icon"
                            style={{
                                position: 'fixed',
                                bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
                                right: '1.5rem',
                                color: 'var(--accent-primary)',
                            }}
                            title="open Garden"
                        >
                            <Flower2 size={24} />
                        </button>
                    </Shell>
                </>
            )}
        </>
    )
}

export default App

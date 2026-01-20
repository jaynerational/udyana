import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Flower2, MousePointer } from 'lucide-react';

const FIRST_PRESERVE_KEY = 'udyana_first_preserve_done';
const GARDEN_VISITED_KEY = 'udyana_garden_visited';

interface FirstPreserveGuideProps {
    onGoToGarden: () => void;
    onDismiss: () => void;
}

// Shown after user's FIRST preserve action
export const FirstPreserveGuide = ({ onGoToGarden, onDismiss }: FirstPreserveGuideProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Small delay for dramatic effect
        const timer = setTimeout(() => setVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleGoToGarden = () => {
        localStorage.setItem(FIRST_PRESERVE_KEY, 'true');
        onGoToGarden();
    };

    const handleDismiss = () => {
        localStorage.setItem(FIRST_PRESERVE_KEY, 'true');
        onDismiss();
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(61, 58, 56, 0.4)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 200,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease',
                padding: 'var(--sp-4)',
            }}
        >
            <div
                style={{
                    maxWidth: '400px',
                    padding: 'var(--sp-6)',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-xl)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'transform 0.6s var(--ease-spring)',
                }}
            >
                {/* Celebration Icon */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(232, 164, 196, 0.2), rgba(196, 176, 232, 0.2))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--sp-5)',
                    animation: 'breathe 3s ease-in-out infinite',
                }}>
                    <Sparkles size={36} style={{ color: 'var(--accent-primary)' }} />
                </div>

                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--sp-3)',
                    fontWeight: 500,
                }}>
                    beautifully preserved 🌸
                </h2>

                <p style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--sp-5)',
                }}>
                    your thought has bloomed into a flower.
                    visit your <strong>mind meadow</strong> to see your garden grow.
                </p>

                {/* Garden Preview Hint */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--sp-2)',
                    padding: 'var(--sp-3)',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--sp-5)',
                }}>
                    <Flower2 size={20} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                    }}>
                        each emotion creates a unique flower shape
                    </span>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--sp-3)',
                }}>
                    <button
                        onClick={handleGoToGarden}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--sp-2)',
                            padding: 'var(--sp-4) var(--sp-6)',
                            background: 'linear-gradient(135deg, var(--accent-primary), #D494B4)',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            color: 'white',
                            fontFamily: 'var(--font-ui)',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-glow-accent)',
                        }}
                    >
                        explore your garden
                        <ArrowRight size={18} />
                    </button>
                    <button
                        onClick={handleDismiss}
                        style={{
                            padding: 'var(--sp-3)',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-ui)',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                        }}
                    >
                        maybe later
                    </button>
                </div>
            </div>
        </div>
    );
};

// Check if this is the user's first preserve
export const isFirstPreserve = (): boolean => {
    return !localStorage.getItem(FIRST_PRESERVE_KEY);
};

// Check if this is the user's first garden visit
export const isFirstGardenVisit = (): boolean => {
    return !localStorage.getItem(GARDEN_VISITED_KEY);
};

// Mark garden as visited
export const markGardenVisited = (): void => {
    localStorage.setItem(GARDEN_VISITED_KEY, 'true');
};

interface GardenOnboardingProps {
    onDismiss: () => void;
}

// Shown on first Garden visit
export const GardenOnboarding = ({ onDismiss }: GardenOnboardingProps) => {
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            icon: <Flower2 size={28} />,
            title: 'welcome to your meadow',
            description: 'each flower here is a thought you chose to preserve. they bloom in different shapes based on the emotion detected.',
        },
        {
            icon: <MousePointer size={28} />,
            title: 'tap to explore',
            description: 'flowers of the same emotion drift together. watch them gently sway as you explore your emotional landscape.',
        },
        {
            icon: <Sparkles size={28} />,
            title: 'export your map',
            description: 'use the buttons below to create a beautiful "meadow map" card — perfect for sharing or reflecting.',
        },
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            markGardenVisited();
            onDismiss();
        }
    };

    const handleSkip = () => {
        markGardenVisited();
        onDismiss();
    };

    const currentStep = steps[step];

    return (
        <div
            style={{
                position: 'absolute',
                bottom: 'max(100px, env(safe-area-inset-bottom, 100px))',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '380px',
                padding: 'var(--sp-5)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 150,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.5s ease, transform 0.5s var(--ease-spring)',
            }}
        >
            {/* Progress Dots */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--sp-2)',
                marginBottom: 'var(--sp-4)',
            }}>
                {steps.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: i === step ? '24px' : '8px',
                            height: '8px',
                            borderRadius: 'var(--radius-full)',
                            background: i === step ? 'var(--accent-primary)' : 'var(--border-subtle)',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>

            {/* Icon */}
            <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, rgba(232, 164, 196, 0.15), rgba(196, 176, 232, 0.15))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--sp-3)',
                color: 'var(--accent-primary)',
            }}>
                {currentStep.icon}
            </div>

            <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: 'var(--sp-2)',
                fontWeight: 500,
            }}>
                {currentStep.title}
            </h3>

            <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: 1.6,
                marginBottom: 'var(--sp-4)',
            }}>
                {currentStep.description}
            </p>

            <div style={{
                display: 'flex',
                gap: 'var(--sp-3)',
            }}>
                <button
                    onClick={handleSkip}
                    style={{
                        flex: 1,
                        padding: 'var(--sp-3)',
                        background: 'transparent',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                    }}
                >
                    skip
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        flex: 2,
                        padding: 'var(--sp-3)',
                        background: 'linear-gradient(135deg, var(--accent-primary), #D494B4)',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        color: 'white',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                    }}
                >
                    {step < steps.length - 1 ? 'next' : 'start exploring'}
                </button>
            </div>
        </div>
    );
};

// Tooltip pointing to Garden button (shown after preserve without going to garden)
interface GardenTooltipProps {
    visible: boolean;
}

export const GardenTooltip = ({ visible }: GardenTooltipProps) => {
    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 'calc(max(1.5rem, env(safe-area-inset-bottom, 1.5rem)) + 60px)',
                right: '1.5rem',
                background: 'var(--bg-surface)',
                padding: 'var(--sp-3) var(--sp-4)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '200px',
                zIndex: 90,
                animation: 'float-up 0.5s ease-out',
            }}
        >
            <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.5,
            }}>
                tap here to see your flowers bloom 🌸
            </p>
            {/* Arrow pointing down */}
            <div style={{
                position: 'absolute',
                bottom: '-8px',
                right: '20px',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid var(--bg-surface)',
            }} />
        </div>
    );
};

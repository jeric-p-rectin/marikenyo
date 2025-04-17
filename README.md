# Marikenyo - Marikina Shoe Festival Website

A modern, interactive website showcasing the Marikina Shoe Festival, highlighting the rich shoemaking heritage of Marikina City, Philippines. The website features responsive design, 3D shoe models, and information about various festival events.

## Project Overview

This project is a Next.js web application that celebrates Marikina's status as the Shoe Capital of the Philippines through an engaging digital experience. The website features interactive elements, 3D models of shoes, and information about various events related to the festival.

## Technologies Used

### Core Framework and Languages
- **Next.js 15.2.4**: React framework with App Router architecture
  - Used for server components, routing, and overall application structure
  - Implements the newer App Router pattern (`app/page.tsx` instead of `pages/index.tsx`)
- **TypeScript**: Strongly typed programming language
  - Used for type safety and better developer experience
  - Interfaces for component props (e.g., `ShoeEventCardProps`)
- **React 19.0.0**: JavaScript library for building user interfaces
  - Functional components with hooks throughout the application

### Styling and UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
  - Used extensively for styling all components
  - Custom color scheme defined in `tailwind.config.ts`
  - Responsive classes (e.g., `sm:text-5xl`)
- **Custom Fonts**:
  - Google Fonts integration via Next.js font system
  - Playfair Display for headings
  - Montserrat for body text

### 3D Rendering and Visualization
- **Three.js 0.175.0**: JavaScript 3D library
  - Base library for 3D rendering
- **@react-three/fiber 9.1.2**: React renderer for Three.js
  - `Canvas` component used as the container for 3D scenes
- **@react-three/drei 10.0.6**: Helper components for react-three-fiber
  - `PerspectiveCamera` for camera setup
  - `OrbitControls` for model rotation
  - `useGLTF` for loading 3D models

### Animation and Interactivity
- **Anime.js 3.2.2**: JavaScript animation library
  - Used for modal animations in `ShoeEventCardContent`
  - Implements staggered animations for elements
- **react-responsive 10.0.0**: Media query hooks for React
  - `useMediaQuery` used throughout for responsive layouts
  - Detects device size to render appropriate components

### State Management
- **React Hooks**: Built-in React state management
  - `useState` for component-level state (e.g., modal visibility)
  - `useEffect` for side effects and lifecycle management
  - `useRef` for DOM references (animation targets)

## Project Structure

### Core Structure
- `/app`: Main application directory (Next.js App Router)
  - `/components`: Reusable UI components
    - `/main-components`: Components specific to the main section
    - `/team-and-credits-components`: Components for the team section
  - `/page.tsx`: Main entry point for the application
  - `/layout.tsx`: Root layout with font configuration
  - `/globals.css`: Global styles

### Key Components

1. **Layout Components**:
   - `Header`: Navigation bar with responsive menu
   - `Footer`: Site footer

2. **Section Components**:
   - `Home`: Hero section with background image
   - `About`: Information about the festival with 3D shoe models
   - `Main`: Showcases different events with interactive cards
   - `TeamAndCredits`: Information about the team and resource credits

3. **Interactive Components**:
   - `ShoeEventCard`: Cards displaying different festival events
   - `ShoeEventCardContent`: Modal content for each event
   - `Carousel`: Slideshow for team members

4. **3D Components**:
   - `LeatherShoe`: 3D model of a leather shoe using Three.js
   - `Heel`: 3D model of a high heel shoe using Three.js

## Implementation Details

### Responsive Design Implementation
```typescript
// Example from about.tsx
const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
const mobileStyle = "flex flex-col bg-primary bg-cover bg-center gap-0 py-28";
const desktopStyle = `grid grid-cols-2 gap-0 bg-primary bg-cover bg-center gap-0 py-28 ${isDesktop2 ? "h-full" : "h-fit"}`;

// Conditional rendering based on screen size
return (
    <div id="about-section" className={isDesktop ? desktopStyle : mobileStyle}>
        {/* Content varies based on screen size */}
        {isDesktop && <div className="flex flex-col gap-7 px-3">
            {/* Desktop-only content */}
        </div>}
    </div>
);
```

### 3D Model Integration
```typescript
// Example from leather-shoe.tsx
function Model() {
  const glb = useGLTF('/leather-shoe.glb');
  return <primitive object={glb.scene} />;
}

export default function LeatherShoe() {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

  return (
    <Canvas style={{ width: '100%', height: '300px', touchAction: 'pan-y', pointerEvents: 'none' }}>
      <PerspectiveCamera makeDefault fov={70} position={isDesktop ? [50, 250, 310] : [50, 250, 450]} />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} enableRotate={false}/>
      <Model/>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
    </Canvas>
  );
}
```

### Animation with Anime.js
```typescript
// Example from shoe-event-card-content.tsx
useEffect(() => {
    if (hasMounted && ShoeEventCardContentRef.current) {
        document.body.style.overflow = 'hidden';
        // Staggered Children Animation
        anime.timeline()
        .add({
            targets: ShoeEventCardContentRef.current,
            translateY: ['100%', '0%'],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 800,
        })
        .add({
            targets: ShoeEventCardContentRef.current.querySelectorAll('h1, p, button'),
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutExpo',
            duration: 600,
            delay: anime.stagger(100),
        });
    }
}, [hasMounted]);
```

### About Component
The `about.tsx` component is a key section of the website that provides information about the Marikina Shoe Festival. It features:

- Responsive layout that changes from a column on mobile to a grid on desktop
- Integration of 3D shoe models (LeatherShoe and Heel components)
- Conditional rendering of content based on screen size
- Smooth scrolling functionality to navigate to other sections

```typescript
// Key features of about.tsx
export default function About() {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const isDesktop2 = useMediaQuery({ query: '(min-width: 1024px)' });
    const mobileStyle = "flex flex-col bg-primary bg-cover bg-center gap-0 py-28"
    const desktopStyle = `grid grid-cols-2 gap-0 bg-primary bg-cover bg-center gap-0 py-28 ${isDesktop2 ? "h-full" : "h-fit"}`

    // Component includes:
    // 1. Festival description
    // 2. 3D leather shoe model
    // 3. Legacy description (desktop only)
    // 4. 3D heel model
    // 5. "Discover More" button with different positioning based on device
}
```

## Design Features

1. **Color Scheme**:
   - Primary: #1D1912 (dark brown)
   - Secondary: #F3F3E6 (off-white)
   - Tertiary: #EECD5C (gold)
   - Quaternary: #D2A63C (darker gold)
   - Quinary: #BB8525 (amber)

2. **Typography**:
   - Playfair Display: Used for headings
   - Montserrat: Used for body text

3. **Interactive Elements**:
   - Smooth scrolling between sections
   - Modal popups for event details
   - Animated transitions using Anime.js
   - Auto-rotating 3D models

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Anime.js Documentation](https://animejs.com/documentation/)

## Credits

- 3D Models:
  - "Leather Shoe" - 3D model by assetfactory – Used under license from Sketchfab
  - "Pointy Stiletto" - 3D model by hiirusama – Used under license from Sketchfab

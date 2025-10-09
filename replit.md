# ResuMind AI

## Overview

ResuMind AI is a modern web application designed for Gen Z professionals to create ATS-friendly resumes and CVs. The platform offers AI-powered resume generation, resume screening with scoring, and CV building tools with multiple professional templates. The application features a vibrant, creative design inspired by tools like Canva, Notion, and Linear, while maintaining professional credibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management

**UI Component System**
- Shadcn UI component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom theme system supporting light/dark modes with design guidelines emphasizing vibrant Gen Z aesthetics

**Design Philosophy**
- Vibrant color palette with bold purples, pinks, and cyans
- Smooth interactions with elevation effects (hover-elevate, active-elevate-2 classes)
- Professional yet playful aesthetic balancing creativity and credibility
- Inter font family for consistent typography

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- RESTful API pattern with `/api` prefix for all application routes
- Middleware-based architecture for request processing
- Custom error handling middleware

**Development Features**
- Vite middleware integration for HMR in development
- Request/response logging middleware
- Development-only Replit plugins (cartographer, dev banner) for enhanced DX

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage abstraction (`IStorage`) allowing easy migration to persistent storage
- User management with basic CRUD operations

### Data Layer

**Database Configuration**
- Drizzle ORM configured for PostgreSQL
- Schema-first approach with TypeScript types generated from Drizzle schemas
- Neon Database serverless driver for PostgreSQL connections
- Database migrations managed through Drizzle Kit

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas generated from Drizzle schemas for runtime validation
- Type inference for both insert and select operations

**Current State**
- Application currently uses in-memory storage for development
- Database schema and configuration ready for PostgreSQL integration
- Migration infrastructure in place for schema updates

### Key Features & Workflows

**Resume Generator**
- Two generation modes: Automatic (question-based) and Template-based
- 12+ professional templates with categories (Tech, Business, Creative, etc.)
- Free and premium template tiers
- Visual template preview system with multiple layout variants
- Editable preview before download
- PDF export using html2canvas and jsPDF

**Resume Screening**
- File upload for PDF/DOCX resumes (max 10MB)
- Job role, CTC, and experience input fields
- ATS score visualization with animated circular progress indicator
- Color-coded scoring (red <60, yellow 60-79, green 80+)
- Recommendation chips with categorized improvement suggestions

**CV Generator**
- Academic and research-focused templates
- Create new or improve existing CV workflows
- Template selection with photo/non-photo variants
- File upload and analysis for existing CVs
- Industry-specific question flows

### External Dependencies

**UI & Component Libraries**
- @radix-ui/* packages (v1.x) - Accessible component primitives for dialogs, dropdowns, tooltips, etc.
- cmdk - Command palette interface
- embla-carousel-react - Carousel/slider functionality
- lucide-react - Icon library
- react-day-picker - Date picker component
- vaul - Drawer component

**Form & Validation**
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation library
- drizzle-zod - Generate Zod schemas from Drizzle tables

**Database & ORM**
- drizzle-orm - TypeScript ORM
- drizzle-kit - Migration and schema management tools
- @neondatabase/serverless - Neon serverless PostgreSQL driver

**Utilities**
- date-fns - Date manipulation
- clsx & tailwind-merge - Conditional CSS class management
- class-variance-authority - Component variant utilities
- nanoid - Unique ID generation

**Document Generation**
- html2canvas - Convert HTML to canvas for PDF generation
- jspdf - PDF creation library

**Session Management**
- connect-pg-simple - PostgreSQL session store for Express (configured but using in-memory currently)

**Development Tools**
- @replit/vite-plugin-* - Replit-specific development plugins
- tsx - TypeScript execution for development server
- esbuild - Production build bundler for server code

**Styling**
- tailwindcss - Utility-first CSS framework
- autoprefixer - PostCSS plugin for vendor prefixes
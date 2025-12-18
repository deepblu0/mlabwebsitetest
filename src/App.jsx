import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ProjectMap from './components/ProjectMap';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <ProjectMap />
                                <ProjectCards />
                                <Partners />
                            </>
                        } />
                        <Route path="/project/:id" element={<ProjectDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

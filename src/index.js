import React from 'react';
import NotesApp from '../src/components/NotesApp';
import { createRoot } from 'react-dom/client';

// import style
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);

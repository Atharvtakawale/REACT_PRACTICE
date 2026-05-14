import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
  const [notesObjectList, setNotesObjectList] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notesObjectList));
  }, [notesObjectList]);

  
  const handleSubmit = (e) => {
    console.log('Form submitted' , noteTitle, noteContent);
    setNotesObjectList([...notesObjectList, {title: noteTitle, content: noteContent}]);
    e.preventDefault();
    setNoteTitle('');
    setNoteContent('');
  }
  
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Notes App</h1>
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Form Section - Left Side */}
          <div className='lg:w-1/2 xl:w-2/5'>
            <form className='bg-white rounded-xl shadow-lg p-6 space-y-4'
            onSubmit={(e) => {
              handleSubmit(e);
            }}>
              <div className='space-y-4'>
                <div>
                  <label htmlFor='note-title' className='block text-sm font-medium text-gray-700 mb-2'>
                    Note Title
                  </label>
                  <input 
                    type="text" 
                    id='note-title'
                    placeholder="Enter your note title" 
                    value = {noteTitle}
                    onChange={(e) => {
                      setNoteTitle(e.target.value);
                    }}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  />
                </div>
                
                <div>
                  <label htmlFor='note-content' className='block text-sm font-medium text-gray-700 mb-2'>
                    Note Content
                  </label>
                  <textarea 
                    id='note-content'
                    placeholder='Write your notes here...' 
                    value = {noteContent}
                    onChange={(e) => {
                      setNoteContent(e.target.value);
                    }}
                    rows='4'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]'
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
          
          {/* Notes Cards Section - Right Side */}
          <div className='lg:w-1/2 xl:w-3/5'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Your Notes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {notesObjectList.map((note, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 border border-gray-100'>
                  <h3 className='font-semibold text-gray-800 mb-2 text-lg'>{note.title}</h3>
                  <p className='text-gray-600 text-sm line-clamp-3'>{note.content}</p>
                  <div className='mt-3 flex gap-2'>
                    <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>Edit</button>
                    <button className='text-red-600 hover:text-red-800 text-sm font-medium'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
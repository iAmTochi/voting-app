import React, {useState} from 'react';


export default function CreatePoll() {
    const [title, setTitle] = useState('');
    const [choices, setChoices] = useState(['']);

    const addAnswer = () => {
        setChoices([
            ...choices,
            ''
        ])
    }
    return (
        <div className="container mx-auto my-16:my-32 px-6">
            <div className="w-full max-w-3xl mx-auto rounded shadow-md bg-white">
                <header className="border-b border-gray-400 px-8 py-5 text-gray-800">
                    Create poll
                </header>
                <div className="py-5 px-8">
                   <div className="mb-6">
                        <label htmlFor="title" className="text-sm mb-2 inline-block">Enter the title of the poll</label>
                        <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" name='title' id="title" className="w-full py-2 border border-gray-400  px-4 focus:outline-none focus:shadow-outline" />
                   </div>
                    <div className="mb-6">
                        <label  className="text-sm mb-2 inline-block">Enter all the possible answers for this poll</label>
                        {choices.map((choice,index) => (
                            <input key={index} type="text" value={choice}  className="w-full py-2 border border-gray-400  px-4 mt-2 focus:outline-none focus:shadow-outline" />
                        ))}
                   </div>

                    <button onClick={addAnswer} className="bg-blue-600 text-white px-3 py-2 border border-blue-600 active:bg-blue-700 transition duration-150 ease-in-out  focus:outline-none focus:shadow-outline">Add answer</button>

                    <div className="mt-12 mb-6 text-center">
                        <button className="bg-blue-600 text-white px-3 py-2 border border-blue-600 active:bg-blue-700 transition duration-150 ease-in-out  focus:outline-none focus:shadow-outline">Create Poll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
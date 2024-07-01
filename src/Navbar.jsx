import { React, useEffect, useState } from "react";

export default function Navbar() {
    const [lang, setLanguage] = useState([]);

    const langoptions = [
        { language: 'ENG', value: 1 },
        { language: 'GEO', value: 2 }
    ]
    const saveLanguage = (event) => {
        setLanguage(event.target.value);
        let langValue = {langValue : event.target.value}
        localStorage.setItem('lang', JSON.stringify(langValue));
    }


    useEffect(() => {
        const lang = JSON.parse(localStorage.getItem('lang'))
        debugger
        setLanguage(lang);
    }, [])

    let title = 'Find movies';
    if(lang && lang[0] != null)
    {
        title = lang[0].langValue === 1 ? 'ფილმები' : 'Find movies';
    }
    
    
    return <nav className='nav'>
        <a href="/" className='site-title'>{title}</a>
        <select onChange={saveLanguage} id="lang" name="language" className="lang">
            {langoptions.map(lang => 
                (<option value={lang.value} >{lang.language}</option>)
            )}
        </select>
        <ul>
            <li >
                <a href="/login">Login
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle m-1" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                </a>
            </li>
            <li >
                <a href="/favourites">Favourites
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart-fill m-1" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                    </svg>
                </a>
            </li>
            <li >
                <a href="/about">About
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="navy" class="bi bi-info-circle-fill m-1" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                </svg>
                </a>
            </li>
            <li >
                <a href="/contact">Contact
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill m-1" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>    
                </a>
            </li>
        </ul>
    </nav>
}
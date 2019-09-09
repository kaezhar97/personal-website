import React from 'react';

function useExperienceSection(title, experienceItems) {

    let count = 0;
    let elementList = experienceItems.map((item) => 
        <div key={count++}>{item}</div>
    );

    return (        
        <div>
            <h2>{title}</h2>
            <div>
                {elementList}
            </div>
        </div>
    );
}

export default useExperienceSection;
import React from 'react';

function useExperienceSection(title, experienceItems , rowFlag) {
    let count = 0;
    let elementList = experienceItems.map((item) => 
        <div key={count++} style={{display: `${rowFlag ? "inline-block" : "inherit"}`}} className="experience-set-item">{item}</div>
    );

    return (        
        <div className="experience-set">
            <div className="experience-set-title">{title}</div>
            <div className="experience-set-list">
                {elementList}
            </div>
        </div>
    );
}

export default useExperienceSection;
import React from 'react';
import './CompanyInfo.css';
import CompanyInfos from './CompanyInfos';

const info = [
    {
        title: `KHY’s Snacks About Us`,
        paragraph: 'At KHY Snacks, we are passionate about redefining snacking with our unique blend of innovation and sustainability. Founded on the belief that snacks can be both delicious and nutritious, we specialize in crafting flavorful products like our Tropical Snack Bars and Crunch Craze Crackers. We prioritize high-quality, responsibly sourced ingredients, celebrating natural flavors and textures while minimizing waste through creative sourcing, such as utilizing spent grain and mopane worms.'
    },
    {
        title: `Mission Statement`,
        paragraph: 'At KHY Snacks, our mission is to create innovative, delicious, and nutritious snack products that celebrate the vibrant flavors of nature while promoting sustainability. We are dedicated to using high-quality, responsibly sourced ingredients, like spent grain and mopane worms, to craft our Tropical Snack Bars and Crunch Craze Crackers. Our goal is to inspire health-conscious consumers to embrace unique, wholesome snacking options that not only satisfy cravings but also nourish the body and respect the planet.'
    },
]

const CompanyInfo = () => {
    return (
        <div className='companyinfo' style={{paddingTop: '20px'}}>
            <h1 className='companyinfo_title' >About</h1>
            <div className='div'></div>
            <div className="company-info">
                {info.map((item, i) => 
                    <CompanyInfos
                        key={i}
                        title={item.title} 
                        paragraph={item.paragraph} 
                    />
                )}
            </div>
            <div className="company-info">
            </div>
        </div>
    );
};

export default CompanyInfo;
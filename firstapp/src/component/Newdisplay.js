import React  from 'react'


const NewsList =(props) => {

    const renderlist = props.newsdata.map((data) =>{

        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                 <p>{data.feed}</p>
            </div>
        )

    })
    return (
        <div>
           {renderlist}
        </div>
    )
}

export default NewsList;
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,des,imageUrl,newsUrl} =this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} alt="/"/>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{des}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>

                        {/* <h2>Employee details</h2>
                        <p className="card-text">{Ename}</p>
                        <p className="card-text">{companyName}</p>
                        <p className="card-text">{id}</p> */}


                    </div>
            
      </div>
    )
  }
}

export default NewsItem

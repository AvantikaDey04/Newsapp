import React, { Component } from 'react';

export default class Newsitem extends Component {
 
  render() {
    let {title,  description, imageurl, newsurl, author, date,source }=this.props;
    return (
      <div>
                <div className="card" >
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-end',
                    position:'absolute',
                    right:'0'

                  }
                  }>
                  <span class="badge rounded-pill bg-danger">{source}</span>


                  </div>
        <img src={!imageurl?"https://media.cnn.com/api/v1/images/stellar/prod/still-20734479-1586-595-still-copy.jpg?c=16x9&q=w_800,c_fill": imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-text">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-danger'>By {!author?"unknown":author} on {date}</small></p>
            <a href={newsurl} target ="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
       
      </div>
    );
  }
}

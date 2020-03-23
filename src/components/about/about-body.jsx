import React from 'react'

import Icon from '../partials/icon.jsx'

import linebreakToBr from '../../helpers/linebreak-to-br'

import lang from 'lang'

import Test from '../../models/Test'

import searchMovies from '../../models/neo4jApi'

require('neo4j-driver/lib/browser/neo4j-web.min');
var _ = require('lodash');
var Movie = require('../../models/Movie')
var neo4j = require('neo4j-driver');
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Hailee613"));
var Title

const langContext = lang.about

export default class AboutBody extends React.PureComponent {
  constructor(){
    super()
    var Title2
  }

  async Test2(queryString) {
    var session = driver.session();
    return session
      .run(
        'MATCH (movie:Movie) \
        WHERE movie.title =~ $title \
        RETURN movie.title, \
        movie.tagline, \
        movie.released \
        LIMIT 1',
        {title: '(?i).*' + queryString + '.*'}
      )
      .then(async result => {
        session.close();
        return result.records.map(async record => {
          console.log("Title: " + record.get('movie.title'))
          console.log("Tagline: " + record.get('movie.tagline'))
          //console.log("Relased: " + record.get('movie.tagline'))
          return this.Title2 = record.get('movie.title')
        });
      })
      .catch(error => {
        session.close();
        throw error;
      });
  }

  render () {
    console.log(this.Title2)
    const la = this.Test2('The Polar Express')
    console.log("This.Title: " + this.Title2)
/*     const data = this.state.resources.map((r,i) => {
      return (<li key={i}>
        {r.name}
      </li>
      )
    }) */
    //console.log("Data: " + data)
    //const num = searchMovies("The Matrix Reloaded")
    const {about} = this.props.profile
    const findMeOnElements = about.findMeOn.map(
      (element, i) => (element.url
        ? <a className='flex flex-cross-center' key={i} href={element.url} target='_blank' title={element.url}><Icon iconName={element.iconName} iconColor={element.hoverColor} />&nbsp;{element.text}</a>
        : <span className='flex flex-cross-center' key={i}><Icon iconName={element.iconName} iconColor={element.hoverColor} />&nbsp;{element.text}</span>
      )
    )

    return (
      <div className='pt-content-card__body pt-content-card__body__about flex flex-full-center'>
        <div className='pt-content-card__body__about__presentation flex flex-dc flex-full-center'>
          <img src={`./assets/${this.props.profile.avatarPath}`} alt={`${this.props.profile.fullName}'s Image`} />
          <h1 className='ta-c'>{linebreakToBr(about.title)}</h1>
        </div>
        <div className='pt-content-card__body__about__details flex flex-dc flex-full-center'>
          <p>
            {linebreakToBr(about.description)}
            {this.Title2}
          </p>
          
          <h3>{langContext.find_me}</h3>
          <div className='pt-content-card__body__about__details__net-icons flex-sa'>
            {findMeOnElements}
          </div>
        </div>
      </div>
    )
  }
}

// Write your Character component here
import React from 'react'
import styled from 'styled-components'


// Write your Character component here
export default function Character(props) {
    return (
        <>
            {props.characterName.map((item) => {
                return <CharacterCard key={item.name} character={item} />
            })}
        </>
    )
}

const CharacterCard = ({ character }) => {
    return (
        <CardDiv>
            <ul>
                <li>
                    <h2>Name: {character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                </li>
            </ul>
        </CardDiv>
    )
}


const CardDiv = styled.div`
    width: 75%;
    margin: 1.5em auto;
    background-color: black;
    display: flex;
    border: 4px solid red;
    justify-content: center;
    opacity: 50%;
    box-shadow: 8px 8px 3px #000;
    }
    h2 {
        color: white;
        font-size: 2.5em;
        font-weight: bolder;
    }
    p {
        color: ivory;
        font-size: 1.5em;
    }
`
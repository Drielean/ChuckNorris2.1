import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding-bottom: 2rem;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(347deg, rgba(144,140,212,1) 0%, rgba(127,255,212,1) 100%);
  .home-content {
    margin: auto;
    width: 70%;
    .search-box {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      h2 {
        margin: 0.75rem;
      }
    }
  }
  .categories {
    margin: 1rem;
    display: flex;
    justify-content: center;
    ul {
      width: 70%;
      list-style: none;
      flex-wrap: wrap;
      display: flex;
    }
  }
  .category {
    margin: 0.5rem;
    padding: 0.3rem;
    padding-top: 0.5rem;
    vertical-align: bottom;
    min-width: 6rem;
    height: 2rem;
    background: whitesmoke;
    color: #777;
    border-radius: 0.2rem;
    box-shadow: 2px 4px 5px 1px rgba(0,0,0,0.75);
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      color: #222;
      box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);
    }
  }
  .active {
    color: #222;
    box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);
  }
  .input-group {
    input[type=text] {
      height: 2rem;
      font-family: 'Chango', cursive;
      padding: 0.25rem;
      font-size: 1rem;
    }
    button[type=submit] {
      box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);
      border-radius: 1rem;
      margin-left: 0.5rem;
      padding: 0.5rem;
      font-family: 'Chango', cursive;
      &:hover {
        cursor: pointer;
        background: yellowgreen;
      }
    }
  }
  .joke-card {
    background: whitesmoke;
    display: flex;
    margin: 1rem 0;
    padding: 0.5rem;
    align-items: center;
    box-shadow: 1px 2px 2px rgba(0,0,0,0.75);
    border-radius: 0.2rem;
    img {
      padding-right: 1rem;
    }
  }
  .joker {
    display: block;
  }
  .search-gif {
    margin: 1rem auto;
    text-align: center;
  }
`
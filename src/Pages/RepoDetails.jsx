import { FaRegStar, FaRegEye, FaCodeBranch } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RepoDetails() {
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const [branch, setBranch] = useState({})
    const [deployment, setDeployment] = useState({})
    
    

  useEffect(() => {
    fetch(`https://api.github.com/repos/Techeesha/${id}`)
    .then((response) => (response.json()))
    .then((data) => {
      setDetails(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/Techeesha/${id}/branches`)
    .then((response) => (response.json()))
    .then((data) => {
      setBranch(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/Techeesha/${id}/deployments`)
    .then((response) => (response.json()))
    .then((data) => {
      setDeployment(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 


    return (
        <div id="RepoDetail">
            <div className="RepoDetail-card">
                <h2 className="repo-name">{details.name}</h2>
                <div className="repo-mini-details">
                    <p><FaRegStar className="icons" /> Stars: {details.stargazers_count}</p>
                    <p><FaRegEye className="icons" /> Watch: {details.watchers}</p>
                    <p><TbGitFork className="icons" /> Forks: {details.forks}</p>
                    <p><FaCodeBranch className="icons" /> Branches: {branch.length}</p>
                </div>
                <p>Main Language: {details.language === null ? "none": details.language}</p>
                <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://Techeesha.github.io/${details.name}`}>Techeesha.github.io/{details.name}</a>}</p>
                <p><a href={`https://github.com/${details.full_name}`}>View on Github</a></p>

            </div>
        </div>


        
    )
}


export default RepoDetails



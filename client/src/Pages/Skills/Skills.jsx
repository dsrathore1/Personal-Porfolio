import React from 'react';
import Tile from '../../Components/Tile/Tile';
import './SkillsStyle.css';

const Skills = () => {
    return (
        <>
            <div className='skillContainer'>
                <h1 className='skillHeading'>💻 Skill & <span className='abilities'>Abilities</span></h1>
                <div className='skillInnerContainer'>
                    <div className='firstList'>
                        <Tile title="MongoDB" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        <Tile title="ExpressJS" img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
                        <Tile title="ReactJS" img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
                        <Tile title="NodeJS" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
                        <Tile title="HTML" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <Tile title="CSS" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    </div>

                    <div className='firstList'>
                        <Tile title="AWS" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                        <Tile title="Docker" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <Tile title="Kubernetes" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                        <Tile title="Jenkins" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" />
                        <Tile title="Terraform" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
                        <Tile title="Ansible" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" />
                    </div>

                    <div className='firstList'>
                        <Tile title="Java" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <Tile title="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                        <Tile title="Python" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <Tile title="C++" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                        <Tile title="Dart" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
                        <Tile title="Kotlin" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" />
                    </div>
                    <div className='firstList'>
                        <Tile title="Flutter" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                        <Tile title="Android" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
                        <Tile title="MySQL" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        <Tile title="Linux" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                        <Tile title="AdobeXD" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg" />
                        <Tile title="Figma" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    </div>
                    <div className='firstList'>
                        <Tile title="GitHub" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <Tile title="Git" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <Tile title="AppWrite" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg" />
                        <Tile title="Redis" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />
                        <Tile title="Redux" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <Tile title="VS Code" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills
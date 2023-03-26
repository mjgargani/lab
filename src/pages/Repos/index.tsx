import React, { useContext, useEffect, useState } from 'react'
import { css } from 'styled-components'

import GridCell from '../../components/atoms/GridCell'
import GridContainer from '../../components/atoms/GridContainer'
import Card from '../../components/molecules/Card'
import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import { GitHubRepoItem } from '../../context/types'
import { device, size } from '../../utils/devices'
import imgLoader from '../../utils/imgLoader'
import mdParser from '../../utils/mdParser'
import randomId from '../../utils/randomId'

const Repos: React.FC<PageProps> = ({ dataTestId = randomId('page-repos'), show = true }) => {
  const { repos } = useContext(GitHubDataContext)
  const [ordenedRepos, setOrdenedRepos] = useState<GitHubRepoItem[]>([])

  useEffect(() => {
    if (!!repos?.length && !!!ordenedRepos.length) {
      const newOrdenedRepos = [
        ...repos.sort((a, b) => (a!.id < b!.id ? 1 : -1)).filter((el) => el?.pinned),
        ...repos.sort((a, b) => (a!.id < b!.id ? 1 : -1)).filter((el) => !el?.pinned),
      ]
      imgLoader(
        newOrdenedRepos.map((el) => el?.thumbnail!),
        () => setOrdenedRepos(newOrdenedRepos as GitHubRepoItem[]),
      )
    }
  }, [repos, ordenedRepos])

  const RepoItem = (el: GitHubRepoItem | undefined) => (
    <GridCell key={randomId('repo-item', true)}>
      <Card
        bgImg={{
          source: el!.thumbnail,
          new: el!.new,
          pinned: el!.pinned,
          stars: el!.stargazers_count,
          watchers: el!.watchers_count,
        }}
        url={el!.html_url}
        title={
          el!.name === 'mjgargani'
            ? 'nodejs-typescript-reactjs-styledcomponents_2023-portfolio'
            : el!.name
        }
        styledCss={
          el!.description.length >= 50 &&
          css`
            @media ${device.tablet} {
              p {
                font-size: 95% !important;
              }
            }
          `
        }
      >
        {mdParser(el!.description)}
      </Card>
    </GridCell>
  )

  return (
    <Page show={show}>
      <GridContainer
        dataTestId={dataTestId}
        columnGap={3}
        rowGap={3}
        styledCss={css`
          position: absolute;
          height: 100% !important;
          grid-template-columns: repeat(2, 1fr) !important;

          @media ${device.tablet} and (orientation: landscape) {
            @media (min-aspect-ratio: 4/3), (min-aspect-ratio: 16/9), (min-aspect-ratio: 16/10) {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            @media (min-aspect-ratio: 23/9), (min-aspect-ratio: 23/10) {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
          @media ${device.tablet} and (orientation: portrait) {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr) !important;
          }
          @media (max-width: ${size.tablet}px) and (orientation: portrait) {
            grid-template-columns: repeat(1, 1fr) !important;
            grid-template-rows: auto !important;
          }
        `}
      >
        {ordenedRepos?.length
          ? ordenedRepos.map(RepoItem)
          : repos?.length &&
            repos!.map((el) => <Card key={randomId('card-item', true)} isLoading={true} />)}
      </GridContainer>
    </Page>
  )
}

export default Repos

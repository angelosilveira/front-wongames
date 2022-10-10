import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render showcase and banner slider', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()

    // expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /most popular/i })
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /upcomming/i })
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /free games/i })
    // ).toBeInTheDocument()

    // banner

    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    // expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    // expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})

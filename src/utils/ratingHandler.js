export const ratingHandler = (value) => {
  switch (true) {
    case +value >= 10 && +value < 20:
      return (
        <div>
          <i className="fa fa-star-half-alt" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );

    case +value >= 20 && +value < 30:
      return (
        <div>
          <i className="fa fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 30 && +value < 40:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star-half-alt" />{' '}
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 40 && +value < 50:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 50 && +value < 60:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star-half-alt" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 60 && +value < 70:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 70 && +value < 80:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" /> <i className="fa fa-star-half-alt" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 80 && +value < 90:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
    case +value >= 90 && +value < 100:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star-half-alt" />
        </div>
      );

    case +value >= 100:
      return (
        <div>
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
          <i className="fa fa-star" />
        </div>
      );
    default:
      return (
        <div>
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" /> <i className="far fa-star" />{' '}
          <i className="far fa-star" />
        </div>
      );
  }
};

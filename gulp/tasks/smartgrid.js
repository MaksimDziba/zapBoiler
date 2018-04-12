module.exports = function() {
  $.gulp.task('smartgrid', () => {
    $.smartgrid(
      './dev/static/css/_utils',
      // settings
      {
        outputStyle: 'scss',
        columns: 12, // number of grid columns
        offset: '15px', // gutter width px || %
        filename: '_grid',
        container: {
          maxWidth: '1280px', // max-width оn very large screen
          fields: '30px', // side fields
        },
        breakPoints: {
          xlg: {
            width: '1440px',
            fields: '15px',
          },
          lg: {
            width: '1200px',
            fields: '15px',
          },
          md: {
            width: '992px',
            fields: '15px',
          },
          sm: {
            width: '768px',
            fields: '15px',
          },
          xs: {
            width: '544px',
            fields: '15px',
          },
          xxs: {
            width: '320px',
            fields: '15px',
          },
          /*
            We can create any quantity of break points.
            some_name: {
                width: 'Npx',
                fields: 'N(px|%|rem)',
                offset: 'N(px|%|rem)'
            }
          */
        },
        mixinNames: {
          container: 'container',
        },
      },
    );
  });
};

const { expect } = require('chai');
const { rgbToHexColor } = require('./6.rgbToHex');

describe('rgbToHexColor', () => {
  it('converts black', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('converts white', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('converts green', () => {
    expect(rgbToHexColor(107, 236, 64)).to.equal('#6BEC40');
  });

  it('returns undefined when params are missing', () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it('undefined when out of lower bound', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('undefined when out of higher bound', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it('undefined when a float is passed', () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });

  it('undefined when a string is passed', () => {
    expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
  });
});

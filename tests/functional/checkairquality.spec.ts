import { test } from '@japa/runner'

test.group('Checkairquality', () => {
  // Write your test here
  test('Test api getAirQuality', async ({ client }) => {
    const response = await client.get('/api/getAirQualityn?lat=48.856613&lon=2.352222')
    response.assertStatus(200)
  })
  test('Test api getMostPollutedTime', async ({ client }) => {
    const response = await client.get('/api/getMostPollutedTime')

    response.assertStatus(200)
  })
})

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Guest from 'App/Models/Guest'

export default class GuestsController {
  public async index({ view }: HttpContextContract) {
    const guests = await Guest.query().orderBy('createdAt', 'desc')
    return view.render('guests/index', { guests })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('guests/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const name = request.input('name')
    const message = request.input('message')
    if (!name || !message) {
      session.flash('error', 'Nama dan pesan wajib diisi')
      return response.redirect('back')
    }
    await Guest.create({ name, message })
    session.flash('success', 'Terima kasih sudah memberi pesan!')
    return response.redirect('/guests')
  }
}